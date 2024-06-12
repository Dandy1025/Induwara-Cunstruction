import React, { useState, useEffect } from 'react';
import { 
  Box, Container, Tab, Tabs, Typography, Card, CardContent, CardActions, 
  Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, 
  DialogTitle, TextField 
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';


const AdminNotificationAndFeedback = () => {
  const [notifications, setNotifications] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [currentTab, setCurrentTab] = useState('notifications');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    
    const initialNotifications = [
      { id: 1, title: 'Dilum Jayarathna', message: 'Need 200 cement (Tokyo) on 25.07.2024', read: false },
      { id: 2, title: 'Unknown user', message: 'Need 5 cubes metal', read: false },
      { id: 3, title: 'NS Hardware', message: 'Needs materials. Call +94724536234', read: false },
    ];
    const initialFeedbacks = [
      { id: 1, user: 'John Doe', message: 'Great service!', rating: 5 },
      { id: 2, user: 'Jane Smith', message: 'Could be better.', rating: 3 },
    ];
    setNotifications(initialNotifications);
    setFeedbacks(initialFeedbacks);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingItem({ ...editingItem, [name]: value });
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setOpen(true);
  };

  const handleSave = () => {
    if (currentTab === 'notifications') {
      if (editingItem.id) {
        setNotifications(notifications.map(n => n.id === editingItem.id ? editingItem : n));
      } else {
        setNotifications([...notifications, { ...editingItem, id: notifications.length + 1 }]);
      }
    } else if (currentTab === 'feedbacks') {
      if (editingItem.id) {
        setFeedbacks(feedbacks.map(f => f.id === editingItem.id ? editingItem : f));
      } else {
        setFeedbacks([...feedbacks, { ...editingItem, id: feedbacks.length + 1 }]);
      }
    }
    setEditingItem(null);
    setOpen(false);
  };

  const handleDelete = (id) => {
    if (currentTab === 'notifications') {
      setNotifications(notifications.filter(notification => notification.id !== id));
    } else if (currentTab === 'feedbacks') {
      setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
    }
  };

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  return (
    <Box>
      
     
      <Container sx={{ mt: 4 }}>
        <Tabs value={currentTab} onChange={(e, newValue) => setCurrentTab(newValue)} centered>
          <Tab label="Notifications" value="notifications" />
          <Tab label="Feedback" value="feedbacks" />
        </Tabs>
        {currentTab === 'notifications' && (
          <>
            <Box display="flex" justifyContent="space-between" alignItems="center" my={4}>
              <Typography variant="h5">Notifications</Typography>
              <Button variant="contained" color="primary" startIcon={<Add />} onClick={() => { setEditingItem({ id: null, title: '', message: '', read: false }); setOpen(true); }}>
                Add Notification
              </Button>
            </Box>
            {notifications.map(notification => (
              <Card key={notification.id} sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6">{notification.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{notification.message}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color={notification.read ? 'secondary' : 'primary'} onClick={() => handleMarkAsRead(notification.id)}>
                    {notification.read ? 'Read' : 'Mark as Read'}
                  </Button>
                  <IconButton color="primary" onClick={() => handleEdit(notification)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(notification.id)}>
                    <Delete />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          </>
        )}

        {currentTab === 'feedbacks' && (
          <>
            <Box display="flex" justifyContent="space-between" alignItems="center" my={4}>
              <Typography variant="h5">Feedback</Typography>
              <Button variant="contained" color="primary" startIcon={<Add />} onClick={() => { setEditingItem({ id: null, user: '', message: '', rating: 0 }); setOpen(true); }}>
                Add Feedback
              </Button>
            </Box>
            {feedbacks.map(feedback => (
              <Card key={feedback.id} sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6">{feedback.user}</Typography>
                  <Typography variant="body2" color="textSecondary">{feedback.message}</Typography>
                  <Typography variant="body2" color="textSecondary">Rating: {feedback.rating}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton color="primary" onClick={() => handleEdit(feedback)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(feedback.id)}>
                    <Delete />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          </>
        )}

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>{editingItem && editingItem.id ? 'Edit' : 'Add'} {currentTab.slice(0, -1)}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {currentTab === 'notifications' ? 'Enter the details of the notification.' : 'Enter the details of the feedback.'}
            </DialogContentText>
            {currentTab === 'notifications' && (
              <>
                <TextField margin="dense" label="Title" fullWidth name="title" value={editingItem?.title || ''} onChange={handleInputChange} />
                <TextField margin="dense" label="Message" fullWidth multiline rows={4} name="message" value={editingItem?.message || ''} onChange={handleInputChange} />
              </>
            )}
            {currentTab === 'feedbacks' && (
              <>
                <TextField margin="dense" label="User" fullWidth name="user" value={editingItem?.user || ''} onChange={handleInputChange} />
                <TextField margin="dense" label="Message" fullWidth multiline rows={4} name="message" value={editingItem?.message || ''} onChange={handleInputChange} />
                <TextField margin="dense" label="Rating" fullWidth name="rating" type="number" value={editingItem?.rating || ''} onChange={handleInputChange} />
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary">Cancel</Button>
            <Button onClick={handleSave} color="primary">Save</Button>
          </DialogActions>
        </Dialog>
      </Container>
      
    </Box>
  );
};

export default AdminNotificationAndFeedback;
