import React, { useState, useEffect } from "react";
import { Stack, Container, Typography, Card, CardContent, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

function FeedList() {
  const token = localStorage.getItem("token");
  const sessionUser = jwtDecode(token);
  const [filter, setFilter] = useState(false);
  const [feeds, setFeeds] = useState([]);

  const navigate = useNavigate();

  const fnList = () => {
    let url = "http://localhost:3000/feed";
    if(filter) {
      url += "?userId="+sessionUser.userId;
      console.log(url);
    }
    fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data.imgList);

          let map = new Map();
          data.imgList.forEach(item => {
            if(!map.has(item.id)) {
              map.set(item.id, []);
            }
            map.get(item.id).push(item);
          });
            data.list = data.list.map((item)=>{
              return {...item, list : map.get(item.id) || []}
            })
            console.log(data.imgList);
            console.log(data.list);
            setFeeds(data.list);
        });
  }
 
  useEffect(() => {
    fnList();
    }, [filter])

    const fnDelete = (id) => {

        if(!window.confirm("정말 삭제?")) {
            return;
        }

        fetch("http://localhost:3000/feed/" + id, {
            method : "DELETE",
            headers : {"Authorization": "Bearer " + localStorage.getItem("token")},
        })
        .then(res=> res.json())
        .then(data => {
            alert(data.message);
            console.log(data.result);
            fnList();
        });
    }

    
   return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>피드 목록</Typography>

      <Button onClick={()=>{
        setFilter(!filter);
        fnList();
      }}>{ filter ? "전체보기" : "내꺼만"}</Button>
      <Divider sx={{ mb: 2 }} />
      {feeds.map(feed => (
        <Card key={feed.id} sx={{ mb: 2 }}>
          <CardContent>
            {feed.list.map((item)=>{
              return <img key={item.imgNo} 
              style={{width : "50px", height:"50px"}} 
              src={"http://localhost:3000/" +item.imgPath + item.imgName}></img>
            })}
            <Typography variant="h6">{feed.userId}</Typography>
            <Typography variant="body1">{feed.content}</Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(feed.cdatetime).toLocaleString()}
            </Typography>
            {sessionUser.userId == feed.userId ? <Stack spacing={2} direction="row" >
             <Button variant="outlined" onClick={() => {navigate('/feed/edit?id='+feed.id);}}>수정</Button>
             <Button variant="outlined" onClick={() => fnDelete(feed.id)}>삭제</Button>
            </Stack> : null}
          </CardContent>
        </Card>
      ))}
    </Container>
  )
}

export default FeedList