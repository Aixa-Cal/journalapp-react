import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { ImageGallery } from "../components/ImageGallery";
import { useForm } from "../../hook/useForm";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote, startSaveNote } from "../../store/journal";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';


export const NoteView = () => {

  const dispatch = useDispatch();

  const  {active:note, messageSaved, isSaving} = useSelector(state => state.journal);

  const  {body, title, onInputChange, formState, date} = useForm(note);


  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState));
    
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        title: 'Note updated',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }

  }, [messageSaved])
  

  const onSaveNote = () => {
    dispatch(startSaveNote());
  }  

  

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={30
        } fontWeight="light">
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <Button
        disabled={isSaving}
        onClick={onSaveNote}
        color='primary' sx={{padding:2}} ><SaveOutlined sx={{fontSize: 30, mr:1}}/>Save</Button>
      </Grid>
    
    <Grid container>
        <TextField
        type="text"
        variant="filled"
        fullWidth
        multiline
        label='Title'
        sx={{border: 'none', mb: 1}}
        name="title"
        value={title}
        onChange={onInputChange}
        />

    </Grid>

    <Grid container>
        <TextField
        type="text"
        variant="filled"
        fullWidth
        multiline
        placeholder="What happen today?"
        minRows={5}
        sx={{border: 'none', mb: 1}}
        name="body"
        value={body}
        onChange={onInputChange}

        />

    </Grid>

    <ImageGallery/>


    </Grid>
  );
};
