import React from 'react';
import { Layout as AntdLayout } from 'antd';

const Layout: React.FC = ({ children }) => (
  <>
    <AntdLayout style={{ minHeight: '100vh' }}>
      <div>
        {/*<div style={{ padding: '2.5rem' }}>*/}
        <div className="container">{children}</div>
      </div>
    </AntdLayout>
    <style jsx>{`
      @media (max-width: 560px) {
        .container {
          margin: 0rem 0rem;
        }
      }

      @media (min-width: 1025px) {
        .container {
          margin: 2.5rem 10rem;
        }

    `}</style>
  </>
);

export default Layout;
