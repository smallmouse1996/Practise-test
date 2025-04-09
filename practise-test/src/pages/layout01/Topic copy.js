import React, { useEffect, useState } from 'react';

function Topic() {
  return (
    <div className="main-content">
        <h1>Đề thi thử</h1>
        <p>Chọn một trong số những đề thi dưới đây.</p>

        {/* New section with box containing two links per row */}
        <div className="link-box">
          <div className="link-item">
            <a href="/thi-thu/de-01">Link 1</a>
          </div>
          <div className="link-item">
            <a href="#">Link 2</a>
          </div>
          <div className="link-item">
            <a href="#">Link 3</a>
          </div>
          <div className="link-item">
            <a href="#">Link 4</a>
          </div>
        </div>
    </div>
  );
}

export default Topic;