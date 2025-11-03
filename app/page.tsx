"use client";

import Image from "next/image";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export default function Home() {
  return (
    <main className="modern-background text-dark">
      {/* ===== Profile Section ===== */}
      <section id="profile" className="py-5 text-center fade-in">
        <Container>
        {/* Nama di atas */}
        <h1 className="fw-bold mb-4 text-glow">
          Halo, Saya <span className="text-info">Geraldine Raphael Sidauruk</span>
        </h1>

        {/* Foto profil di tengah */}
        <div className="d-flex justify-content-center mb-4">
          <Image
            src="/Foto_diri.jpg"
            alt="Foto Profil Geraldine Raphael Sidauruk"
            width={250}
            height={250}
            className="rounded-circle shadow-lg border border-4 border-info"
          />
        </div>

        {/* Deskripsi di bawah foto */}
        <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
          Saya seorang <strong>Web Developer</strong> pemula yang tertarik dengan
          dunia pemrograman dan desain web. Saya suka membuat tampilan website yang
          modern, menarik, dan responsif menggunakan <strong>Next.js</strong> dan{" "}
          <strong>Bootstrap</strong>.
        </p>
        <p className="mx-auto" style={{ maxWidth: "700px" }}>
          Saya memiliki semangat belajar tinggi, suka bereksperimen dengan desain
          baru, dan terus mengembangkan kemampuan saya di bidang{" "}
          <strong>front-end</strong> serta <strong>back-end development</strong>.
        </p>

        {/* Tombol kontak */}
        <div className="mt-4">
          <Button
            variant="info"
            className="me-3 text-white px-4"
            href="mailto:raphaelgerald71@gmail.com"
          >
            📧 Email Saya
          </Button>
          <Button
            variant="dark"
            href ="https://github.com/ger21ger/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            💻 GitHub Saya
          </Button>
        </div>
      </Container>
    </section>


      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-5 fade-in contact-section">
        <Container>
          <h2 className="text-center fw-bold mb-4 text-info">Hubungi Saya</h2>
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="shadow-lg border-0 rounded-4 p-4 glass-card">
                <Card.Body>
                  <p className="mb-2">
                    <strong>Nama:</strong> Geraldine Raphael Sidauruk
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:raphaelgerald71@gmail.com"
                      className="text-info text-decoration-none"
                    >
                      raphaelgerald71@gmail.com
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/ger21ger/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-info text-decoration-none"
                    >
                      github.com/ger21ger
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong>Alamat:</strong> Bekasi, Jawa Barat, Indonesia
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer-section text-center text-light py-4 mt-5">
        <Container>
          <div className="mb-3">
            <a
              href="mailto:raphaelgerald71@gmail.com"
              className="footer-icon mx-2"
            >
              📧
            </a>
            <a
              href="https://github.com/ger21ger/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon mx-2"
            >
              💻
            </a>
          </div>
          <p className="mb-0">
            © {new Date().getFullYear()} Geraldine Raphael Sidauruk
          </p>
        </Container>
      </footer>
    </main>
  );
}
