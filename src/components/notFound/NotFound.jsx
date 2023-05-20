import React from 'react';
import './styleNotFound.scss';

export const NotFound = () => {
  return (
    <>
      <div class="main">
        <div class="content">
          <div class="font-404">
            <h1>4<span>0</span>4</h1>
          </div>
          <p>The page you are looking for might have been removed, its URL changed or is temporarily unavailable.</p>
          <a href="/">home page</a>
        </div>
      </div>
    </>
  )
}
