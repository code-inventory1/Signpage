import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/action/action';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HeaderSignIn from './HeaderSignIn';
import NestedModal from './AvatarModal';



function Signin() {
  const [open, setOpen] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getUsers());
    },[])
    const userData= useSelector(state=>state.usersReducer.Posts)
    const handleOpen = (imageData) => {
      setOpen(true);
      setImageUrl(imageData)
    };

    return (
        // <div style={{display:'flex',height:'50vh'}}>
        <>
        <HeaderSignIn/>
        <h2 style={{marginTop:"2rem",marginLeft:"3rem",fontSize:"bold"}}> User Details</h2>
        <hr/>
    <TableContainer style={{marginTop:"2rem"}} component={Paper}>
      <Table sx={{ minWidth: 450,width:1000 ,mx:'auto' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Avatar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="item-element">
        {userData?.length && userData.map((item,index)=>(

            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" data-testId='checkName' scope="row">
                {item.first_name}
              </TableCell>
              <TableCell align="right">{item.last_name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right" style={{color:"blue",cursor:"pointer" }} onClick={()=>handleOpen(item.avatar)}>Click Me</TableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
    <NestedModal
     open={open}
      handleClose={handleClose}
      handleOpen={handleOpen}
      imageUrl={imageUrl}
    />
        </>
        // </div>
    )
}

export default Signin
