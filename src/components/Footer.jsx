import React from 'react'
 
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Data Siswa Sekolah</h5>
              <p>
                Website ini digunakan untuk menyimpan data siswa dari sekolah tertentu dan bisa di update ataupun di hapus sesuai hati
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">All Profil</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white text-decoration-none">Siswa Laki-laki</a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">Siswa Perempuan</a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">Semua Siswa</a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">Coming Soon</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Gallery</h5>
              <ul className="list-unstyled">
              <li>
                  <a href="#!" className="text-white text-decoration-none">Siswa Laki-laki</a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">Siswa Perempuan</a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">Semua Siswa</a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">Coming Soon</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>

    </div>
  )
}

export default Footer