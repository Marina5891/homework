import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { pink } from '@mui/material/colors';

export const TimeLine = ({ createdDate, updatedDate }) => {
  return (
    <Timeline 
      sx={{
        display: 'flex', 
        p: 0, 
        mb: 0, 
        position: 'relative'
      }}
    >
      <TimelineItem>
        <TimelineSeparator 
          sx={{position: 'relative', left: -33}}
        >
          <TimelineDot 
            variant='outlined' 
            sx={{borderColor:pink[200]}} 
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent 
          sx={{
            fontSize: '14px', 
            position: 'relative', 
            left: -32, 
            flexGrow: 50
          }}
        >
          {createdDate}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator 
          sx={{position: 'relative', left: -33}}
        >
          <TimelineDot 
            variant='outlined' 
            sx={{borderColor:pink[600]}}
          />
        </TimelineSeparator>
        <TimelineContent 
          sx={{
            fontSize: '14px', 
            position: 'relative', 
            left: -32, 
            flexGrow: 50,
          }}
        >
          Last edit {updatedDate}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
