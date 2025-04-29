import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FeedList() {

  const [feeds, setFeeds] = useState([]);
  const navigate = useNavigate();
  const fnList = () => {
    fetch("http://localhost:3000/feed")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setFeeds(data.list);
        });
  }
 
  useEffect(() => {
        fnList();
    }, [])

    const fnDelete = (id) => {

        if(!window.confirm("정말 삭제?")) {
            return;
        }

        fetch("http://localhost:3000/feed/" + id, {
            method : "DELETE"
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
      <Divider sx={{ mb: 2 }} />
      {feeds.map(feed => (
        <Card key={feed.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{feed.userId}</Typography>
            <Typography variant="body1">{feed.content}</Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(feed.cdatetime).toLocaleString()}
            </Typography>
            <Button variant="outlined" onClick={() => {navigate('/feed/edit?id='+feed.id);}}>수정</Button>
            <Button variant="outlined" onClick={() => fnDelete(feed.id)}>삭제</Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
}

export default FeedList