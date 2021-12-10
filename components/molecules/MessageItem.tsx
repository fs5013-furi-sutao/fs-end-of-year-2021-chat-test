import React from 'react';
import marked from 'marked';
import { formatISO9075 } from 'date-fns';
import ColorHash from 'color-hash';

import * as constants from '@/constants';

import Avatar from '@/components/atoms/Avatar';

export type Message = {
  id: string;
  body: string;
  createdAt: Date;
  userName: string;
};

type Props = Message;

const MessageItem: React.FC<Props> = ({ userName, body, createdAt }) => {
  let bgColor = constants.DEFALUT_BG_COLOR;
  if (userName != constants.NO_NAME) {
    const colorHash = new ColorHash();
    bgColor = colorHash.hex(userName);
  }
  return (
    <>
      <div className="message">
        <span className="date">{formatISO9075(createdAt)}</span>
        <span className="userName"> {userName}</span>
        <Avatar seed={userName} />
        <br />
        <span dangerouslySetInnerHTML={{ __html: marked(body) }} />
      </div>
      <style jsx>{`
        .date {
          color: white;
        }
        .message {
          background: ${bgColor};
          border-radius: 5px;
          padding: 5px;
          margin: 5px;
        }
      `}</style>
    </>
  );
};

export default MessageItem;
