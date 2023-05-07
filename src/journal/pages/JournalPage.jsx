import React from 'react'
import { JournalLayout } from '../../auth/layout/JournalLayout'
// import { Typography } from '@mui/material'
import { NoteView } from '../views/NoteView'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { IconButton } from '@mui/material'
import { AddOutlined, Note } from '@mui/icons-material'

export const JournalPage = () => {
  return (

    <JournalLayout>
        {/* <Typography>JournalPageJournalPageJournalPageJournalPageJournalPage</Typography> */}
   {/* <NothingSelectedView/> */}
   <NoteView/>

   <IconButton 
   size='large' sx={{backgroundColor:'error.main', 
   ':hover':{backgroundColor:'error.main', opacity:0.9},
   position: 'fixed',
   right:50,
   bottom: 50,
 }}>
  <AddOutlined sx={{fontsize: 30}}/>
   </IconButton>
    </JournalLayout>
  )
}
