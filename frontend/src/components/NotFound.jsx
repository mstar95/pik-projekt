import React from 'react';
import PageWrapper from './PageWrapper';

const NotFound = () => (
  <PageWrapper>
    <div className='page-item'>
      <h1 className='page-info'>{'Not found'}</h1>
      <p>{'404 :('}</p>
    </div>
  </PageWrapper>
)

export default NotFound;
