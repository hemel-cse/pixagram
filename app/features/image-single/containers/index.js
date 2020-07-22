import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import SnackBar from 'app/components/Snackbar';
import metrics from 'app/lib/config/metrics';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import styled from 'styled-components/native';
import {
  Title,
  Caption,
  Avatar,
  useTheme,
} from 'react-native-paper';
import color from 'color';
import { useDispatch, useSelector } from 'react-redux';
import * as snackbarActions from '../actions';
import { imageSaveRequest } from 'app/features/image-grid/actions'

const imageHeight = Math.round(metrics.screenWidth * 4 / 5);
const imageWidth = metrics.screenWidth;

const StyledContainer = styled(View)`
  flex: 1;
  padding-top: 20px;
`
const StyledTop = styled(View)`
  flex-direction: row;
  align-items: center;
`
const StyledAvatar = styled(Avatar.Icon)`
  margin-right: 20px;
  margin-left: 10px;
`
const StyledAvatarImage = styled(Avatar.Image)`
  margin-right: 20px;
  margin-left: 10px;
`
const StyledTouchableOpacity = styled(TouchableOpacity)`
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  justify-content: space-around;
`
const StyledImage = styled(Image)`
  margin-top: 25px;
  border-radius: 0;
  width: ${imageWidth}px;
  height: ${imageHeight}px;
`
const StyledBottomView = styled(View)`
  flex-direction: column;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`
const StyledBottomTouchableOpacity = styled(TouchableOpacity)`
  flex-direction: column;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`
const StyledCaptionTop = styled(Caption)`
  margin-right: 3;
  line-height: 12;
  color: #131313;
`
const StyledCaptionBottom = styled(Caption)`
  line-height: 15px;
  margin-left: -10px;
  color: #131313;
`



const ImageSingle = (props) => {
  
  const { item } = props.route.params;

  const text = useSelector(state => state.singleImageReducer.text);
  const open = useSelector(state => state.singleImageReducer.open);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(snackbarActions.closeSnackbar());
  }

  const onSave = (image) => {
    dispatch(imageSaveRequest(image));
    dispatch(snackbarActions.openSnackbar("Image has been Bookmarked!"));
  }

  const downloadFile = (id, uri) => {
    let fileUri = FileSystem.documentDirectory +id.toString()+".jpg";
    FileSystem.downloadAsync(uri, fileUri)
    .then(({ uri }) => {
        saveFile(uri);
        dispatch(snackbarActions.openSnackbar("Image saved to Gallery!"));
      })
      .catch(error => {
        console.error(error);
      })
  }

  const saveFile = async (fileUri) => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === "granted") {
          const asset = await MediaLibrary.createAssetAsync(fileUri)
          await MediaLibrary.createAlbumAsync("Download", asset, false)
      }
  }

  const onDownload = (image) => {
    downloadFile(image.id, image.largeImageURL)
  }

  const theme = useTheme();

  const contentColor = color(theme.colors.text)
    .alpha(0.8)
    .rgb()
    .string();


  return (
    <StyledContainer>
        <StyledTop>
            <StyledAvatarImage
              source={{ uri: item.userImageURL }}
              size={60}
            />
            <View>
              <Title style={{color: theme.colors.accent}}>{item.user}</Title>
              <StyledCaptionTop>{item.tags}</StyledCaptionTop>
            </View>
            <StyledTouchableOpacity onPress={() => onSave(item)}>
              <StyledAvatar
                icon="bookmark"
                size={30}
                color={contentColor}
              />
            </StyledTouchableOpacity>
          </StyledTop>

          <StyledImage
            source={{ uri: item.webformatURL }}
          />

          <StyledTop>
            <StyledBottomView>
              <StyledAvatar
                icon="eye-circle"
                size={30}
                color={contentColor}
              />
                <StyledCaptionBottom>{item.views}</StyledCaptionBottom>
            </StyledBottomView>
            <StyledBottomView>
            <StyledAvatar
              icon="thumb-up"
              size={30}
              color={contentColor}
            />
              <StyledCaptionBottom>{item.likes}</StyledCaptionBottom>
            </StyledBottomView>
            <StyledBottomView>
            <StyledAvatar
              icon="comment"
              size={30}
              color={contentColor}
            />
              <StyledCaptionBottom>{item.comments}</StyledCaptionBottom>
            </StyledBottomView>
            <StyledBottomView>
            <StyledAvatar
              icon="download"
              size={30}
              color={contentColor}
            />
              <StyledCaptionBottom>{item.downloads}</StyledCaptionBottom>
            </StyledBottomView>
            <StyledBottomView>
            <StyledAvatar
              icon="star-face"
              size={30}
              color={contentColor}
            />
              <StyledCaptionBottom>{item.favorites}</StyledCaptionBottom>
            </StyledBottomView>
            <StyledBottomTouchableOpacity onPress={() => onDownload(item)}>
              <StyledAvatar

                icon="cloud-download"
                size={30}
                color={contentColor}
              />
              <StyledCaptionBottom>Save</StyledCaptionBottom>
            </StyledBottomTouchableOpacity>
          </StyledTop>
        <SnackBar visible={open} text={text} onDismissSnackBar={onClose} onClose={onClose} />
    </StyledContainer>
  );
}

export default ImageSingle;
