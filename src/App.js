import { useEffect } from "react";
import "./App.css";
import { ReactComponent as ResumeIcon } from "./icons/resume.svg";
import { ReactComponent as ContactIcon } from "./icons/contacts.svg";
import { ReactComponent as StatisticIcon } from "./icons/statistic.svg";
import { ReactComponent as ChatIcon } from "./icons/chat.svg";
import { ReactComponent as SettingIcon } from "./icons/setting.svg";
import { ReactComponent as PhoneIcon } from "./icons/phone.svg";
import { ReactComponent as NotificationIcon } from "./icons/bell-notification.svg";
import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { ReactComponent as UpIcon } from "./icons/up.svg";
import { ReactComponent as DownIcon } from "./icons/down.svg";
import { ReactComponent as CallIcon } from "./icons/phone-add.svg";
import { ReactComponent as TagIcon } from "./icons/tag.svg";
import { ReactComponent as SendIcon } from "./icons/send-message.svg";
import { ReactComponent as ImageIcon } from "./icons/image.svg";
import { ReactComponent as EmojiIcon } from "./icons/user-happy.svg";
import { ReactComponent as AttachmentIcon } from "./icons/attachment.svg";
import { ReactComponent as LinkIcon } from "./icons/link.svg";

import userImage from "./images/user.jpeg";
import patrikImage from "./images/patrik.jpeg";

import io from "socket.io-client";

function App() {
  const socket = io("http://localhost:5000/", { transports: ["websocket"] });
  useEffect(() => {
    socket.emit("message", "heyy");
  }, [socket]);
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <ul className="nav-links">
            <li className="logo-section-main">
              <a href="#home-section">
                <span className="logo-first">Chat</span>Tab
              </a>
            </li>
            <li className="logo-section-main"></li>
            <li className="icon-text-action">
              <ResumeIcon />
              <a href="#resume-section" className="navigation-elements">
                Resume
              </a>
            </li>
            <li className="icon-text-action">
              <ContactIcon />
              <a href="#contact-section" className="navigation-elements">
                Contacts
              </a>
            </li>
            <li className="icon-text-action">
              <StatisticIcon />
              <a href="#statistic-section" className="navigation-elements">
                Statistic
              </a>
            </li>
            <li className="icon-text-action">
              <ChatIcon />
              <a href="#chat-section" className="navigation-elements">
                Chat
              </a>
            </li>
            <li className="icon-text-action">
              <SettingIcon />
              <a href="#setting-section" className="navigation-elements">
                Settings
              </a>
            </li>
            <li className="icon-text-action"></li>
            <li className="icon-text-action"></li>
            <li className="icon-text-action realtime-actions">
              <PhoneIcon />
              <NotificationIcon />
            </li>
            <li className="icon-text-action">
              <div className="contact-infos">
                <p className="welcome-message">Good evening, Mohamed </p>
                <p className="phone-info">+(216) 26 976 371</p>
              </div>
              <img src={userImage} alt="user" className="user-photo" />
            </li>
          </ul>
        </nav>
      </header>
      <section className="main-container">
        <div className="chat-actions" id="home-section">
          <div className="action-item chat-action-li">
            <div className="icon-text-action">
              <ResumeIcon />
              <span className="action-text">Pinned</span>
            </div>
            <span className="action-number">5</span>
          </div>
          <div className="action-item chat-action-li">
            <div className="icon-text-action">
              <ResumeIcon />
              <span className="action-text">All</span>
            </div>
            <span className="action-number">35</span>
          </div>
          <div className="action-item chat-action-li">
            <div className="icon-text-action">
              <ResumeIcon />
              <span className="action-text">Live Chat</span>
            </div>
            <span className="action-number">2</span>
          </div>
          <div className="action-item chat-action-li">
            <div className="icon-text-action">
              <ResumeIcon />
              <span className="action-text">Archived</span>
            </div>
            <span className="action-number">0</span>
          </div>
          <div className="action-item chat-action-li">
            <div className="icon-text-action">
              <ResumeIcon />
              <span className="action-text">Blocked</span>
            </div>
            <span className="action-number">0</span>
          </div>
          <div className="action-item chat-action-li">
            <div className="icon-text-action">
              <ResumeIcon />
              <span className="action-text">Trash</span>
            </div>
            <span className="action-number">0</span>
          </div>
        </div>
        <div className="home-section" id="home-section">
          <label className="first">
            <input type="search" placeholder="Search..." />
            <span class="icon">
              <SearchIcon />
            </span>
          </label>
          <div className="chat-part">
            <div className="chat-list">
              <div className="chat-item">Unread</div>
              <div className="chat-item-infos">
                <UpIcon />
              </div>
            </div>
            <div className="chat-items">
              <img src={userImage} alt="user" className="user-photo-in-chat" />
              <div className="user-details">
                <p className="user-name">Mohamed derbali </p>
                <p className="user-phone">+(216) 26 976 371</p>
                <p className="user-message">hi there, how are you?</p>
              </div>
              <span className="message-time">12:30</span>
            </div>{" "}
            <div className="chat-items">
              <img
                src={patrikImage}
                alt="user"
                className="user-photo-in-chat"
              />
              <div className="user-details">
                <p className="user-name">Patrik doe </p>
                <p className="user-phone">+(216) 26 976 371</p>
                <p className="user-message">hi there, how are you?</p>
              </div>
              <span className="message-time">12:30</span>
            </div>
          </div>
          <div className="chat-list">
            <div className="chat-item">From team</div>
            <div className="chat-item-infos">
              <DownIcon />
            </div>
          </div>
          <div className="chat-list">
            <div className="chat-item">From companies</div>
            <div className="chat-item-infos">
              <DownIcon />
            </div>
          </div>
          <div className="chat-list">
            <div className="chat-item">All Message</div>
            <div className="chat-item-infos">
              <DownIcon />
            </div>
          </div>
        </div>
        <div className="chat-content" id="home-section">
          <div className="selected-user-info">
            <img src={userImage} alt="user" className="selected-user-photo" />
            <span className="selected-user-name">
              Conversation with{" "}
              <span className="user-name-header">Mohamed derbali</span>
            </span>
            <span></span>
            <span></span>
            <span></span>
            <button className="selected-user-button">Agree to offer</button>
            <div>
              <TagIcon />
              <CallIcon />
            </div>
          </div>
          <div className="messages">
            <div className="message-content custom-scrollbar">
              <div className="me-message">hey</div>
              <div className="me-message">hey</div>
              <div className="me-message">hey</div>{" "}
              <div className="me-message">hey</div>
              <div className="other-user">
                <span className="user-in-chat">
                  <img
                    src={userImage}
                    alt="user"
                    className="selected-user-photo"
                  />
                  <span className="user-name-header-in-chat">
                    Mohamed derbali
                  </span>
                  <span className="user-in-chat-time">12:30</span>
                </span>
                <div className="other-message">hello there</div>
              </div>
              <div className="me-message">hey</div>
              <div className="me-message">hey</div>{" "}
              <div className="me-message">hey</div>
              <div className="other-user">
                <span className="user-in-chat">
                  <img
                    src={userImage}
                    alt="user"
                    className="selected-user-photo"
                  />
                  <span className="user-name-header-in-chat">
                    Mohamed derbali
                  </span>
                  <span className="user-in-chat-time">12:30</span>
                </span>
                <div className="other-message">hello there</div>
              </div>
              <div className="me-message">hey</div>
              <div className="me-message">hey</div>{" "}
              <div className="me-message">hey</div>
              <div className="me-message">hey</div>
              <div className="me-message">hey</div>{" "}
              <div className="me-message">hey</div>
              <div className="me-message">hey</div>
              <div className="me-message">hey</div>
              <div className="other-user">
                <span className="user-in-chat">
                  <img
                    src={userImage}
                    alt="user"
                    className="selected-user-photo"
                  />
                  <span className="user-name-header-in-chat">
                    Mohamed derbali
                  </span>
                  <span className="user-in-chat-time">12:30</span>
                </span>
                <div className="other-message">hello there</div>
              </div>
              <div className="other-user">
                <span className="user-in-chat">
                  <img
                    src={userImage}
                    alt="user"
                    className="selected-user-photo"
                  />
                  <span className="user-name-header-in-chat">
                    Mohamed derbali
                  </span>
                  <span className="user-in-chat-time">12:30</span>
                </span>
                <div className="other-message">hello there</div>
              </div>
              <div className="me-message">hey</div>
              <div className="other-user">
                <span className="user-in-chat">
                  <img
                    src={userImage}
                    alt="user"
                    className="selected-user-photo"
                  />
                  <span className="user-name-header-in-chat">
                    Mohamed derbali
                  </span>
                  <span className="user-in-chat-time">12:30</span>
                </span>
                <div className="other-message">hello there</div>
              </div>
            </div>
            <label className="send-message">
              <input
                type="text"
                className="send-message-input"
                placeholder="write your message here ..."
              />
              <span class="icons">
                <EmojiIcon className="input-icons" />
                <AttachmentIcon className="input-icons" />
                <ImageIcon className="input-icons" />
                <LinkIcon className="input-icons" />
                <SendIcon className="input-icons" />
              </span>
            </label>
          </div>
        </div>
        <div className="thread-infos" id="home-section">
          <h1>Home</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
