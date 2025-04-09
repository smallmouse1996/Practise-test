import React from 'react';
import Banner from '../../assets/images/ITS-Certiport-Subpage-Headers-0321-Practice.png';

function Header() {
  return (
    <div>
      <div className="sidebar">
        <a href="/">Thi thử IC3</a>
        <a href="/dang-nhap">Đăng nhập</a>
        <a href="/dang-ky">Đăng ký</a>
        <a href="/thi-thu">Thi thử</a>
        <a href="/lien-he">Liên hệ</a>
        <h5 className="footer">Copyright@Practise test 2024</h5>
      </div>

      <div className="top-menu">
        <img src={Banner} alt="Banner" className="banner-image" />
      </div>
    </div>
  );
}

export default Header;
