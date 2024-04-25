import React from 'react'
import {Helmet } from 'react-helmet';
const Link = () => {
  return (
    <div>
        <Helmet>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      </Helmet>
<df-messenger
  intent="WELCOME"
  chat-title="welcome"
  agent-id="da5ae812-3bca-494d-b8ed-139cb8a4a4b0"
  language-code="en"
></df-messenger>
    </div>
  )
}

export default Link
