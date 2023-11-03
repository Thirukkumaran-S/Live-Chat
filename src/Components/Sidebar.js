import React, { useState } from "react";
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ConversationsItem from "./ConversationsItem";

function Sidebar() {
  const [conversations, setconversations] = useState([
    { 
        name: "Test#1", 
        lastMessage: "Last Mesage #1", 
        timeStamp: "today" 
    },
    { 
        name: "Test#2", 
        lastMessage: "Last Mesage #2", 
        timeStamp: "today" 
    },
    { 
        name: "Test#3", 
        lastMessage: "Last Mesage #3", 
        timeStamp: "today" 
    }
  ]);
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <ModeNightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input className="search-box" placeholder="Search" />
      </div>
      <div className="sb-conversation">
        {conversations.map((conversation)=>{
            return<ConversationsItem props={conversation}></ConversationsItem>
        })}
      </div>
    </div>
  );
}

export default Sidebar;
