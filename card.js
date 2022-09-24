import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from './jpg/noimage.png';

export function ActionAreaCard() {
  return (
  	<Box sx={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
    <Card sx={{ maxWidth: 120 }}>
        <CardMedia
          component="img"
          height="100"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom component="div">
            父　伸二
          </Typography>
          <Typography fontSize="14px" color="text.secondary">
          
            Q1.1900年
            　〇月〇日<br/>
            Q2.<br/>
            Q3.
          </Typography>
        </CardContent>
    </Card>
	<Card sx={{ maxWidth: 120 }}>
        <CardMedia
          component="img"
          height="100"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom component="div">
            母　英香
          </Typography>
          <Typography fontSize="14px" color="text.secondary">
            Q1.1990年
            　00月00日<br/>
            Q2.<br/>
            Q3.
          </Typography>
        </CardContent>
    </Card>
    <Card sx={{ maxWidth: 120 }}>
        <CardMedia
          component="img"
          height="100"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom component="div">
            姉　千尋
          </Typography>
          <Typography fontSize="14px" color="text.secondary">
            Q1.2000年
            　00月00日<br/>
            Q2.<br/>
            Q3.
          </Typography>
        </CardContent>
    </Card>
    <Card sx={{ maxWidth: 120 }}>
        <CardMedia
          component="img"
          height="100"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom component="div">
            妹　莉穂
          </Typography>
          <Typography fontSize="14px" color="text.secondary">
            Q1.2000年
            　00月00日<br/>
            Q2.<br/>
            Q3.
          </Typography>
        </CardContent>
    </Card>
    <Card sx={{ maxWidth: 120 }}>
        <CardMedia
          component="img"
          height="100"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom component="div">
            祖母 うめ子
          </Typography>
          <Typography fontSize="14px" color="text.secondary">
            Q1.2000年
            　00月00日<br/>
            Q2.<br/>
            Q3.
          </Typography>
        </CardContent>
    </Card>
    <Card sx={{ maxWidth: 120 }}>
        <CardMedia
          component="img"
          height="100"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom component="div">
            姉の夫　
          </Typography>
          <Typography fontSize="14px" color="text.secondary">
            Q1.2000年
            　00月00日<br/>
            Q2.<br/>
            Q3.
          </Typography>
        </CardContent>
	</Card>
        <Card sx={{ maxWidth: 120 }}>
        <CardMedia
          component="img"
          height="100"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom component="div">
            姪　りん
          </Typography>
          <Typography fontSize="14px" color="text.secondary">
            Q1.2000年
            　00月00日<br/>
            Q2.<br/>
            Q3.
          </Typography>
        </CardContent>
    </Card>
    </Box>
	
    
  );
}