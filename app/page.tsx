"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Brain, Lightbulb, MessageSquare } from "lucide-react"
import dynamic from "next/dynamic"

// Import Orb component with dynamic import to avoid SSR issues
const Orb = dynamic(() => import("./Orb"), { ssr: false })

export default function Home() {
  const heroHeadingRef = useRef(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // 1) HERO title fade in
    gsap.from(heroHeadingRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out",
    })

    // 2) Animate elements with data-fade attribute
    document.querySelectorAll("[data-fade]").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // When element enters bottom 15% of viewport
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
      })
    })

    // 3) Staggered animations for cards
    const cards = document.querySelectorAll(".service-card")
    gsap.from(cards, {
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 75%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <main>
      <header className="nav">
        <Link href="#home" className="logo">
          <span className="text-accent">For</span>One
        </Link>
        <nav>
          <Link href="#services">サービス</Link>
          <Link href="#about">会社概要</Link>
          <Link href="#cases">導入事例</Link>
          <Link href="#contact" className="btn">
            お問い合わせ
          </Link>
        </nav>
      </header>

      {/* ────────── 1. HERO with Orb ────────── */}
      <section id="home" className="section hero">
        <div className="orb-wrapper">
          <Orb hue={260} hoverIntensity={0.5} rotateOnHover={true} forceHoverState={false} />
          <div className="hero-content-centered" ref={heroHeadingRef}>
            <h1 className="hero-title">
              <span className="text-accent">For</span>One
            </h1>
            <p className="hero-subtitle">生成AIで一人ひとりの悩みを解決</p>
          </div>
        </div>
        <div className="scroll-indicator">Scroll</div>
      </section>

      {/* ────────── 2. SERVICES ────────── */}
      <section id="services" className="section services">
        <h2 className="section__title" data-fade="true">
          サービス
        </h2>
        <p className="section-description" data-fade="true">
          ForOneは、生成AIを活用して個人や企業が抱える様々な課題を解決します。
          <br />
          一人ひとりに合わせたカスタマイズされたソリューションを提供します。
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <Brain className="icon" />
            </div>
            <h3>AI分析・診断</h3>
            <p>データを基にAIが最適な解決策を提案。あなたのビジネスや課題を深く理解します。</p>
            <Link href="#" className="link">
              詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <MessageSquare className="icon" />
            </div>
            <h3>カスタムAIチャット</h3>
            <p>あなたのブランドや業務に特化したAIチャットボットを開発。24時間対応可能です。</p>
            <Link href="#" className="link">
              詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Lightbulb className="icon" />
            </div>
            <h3>AIコンサルティング</h3>
            <p>AIの導入から運用まで、専門家がサポート。最適なAI戦略を一緒に考えます。</p>
            <Link href="#" className="link">
              詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ────────── 3. ABOUT ────────── */}
      <section id="about" className="section about">
        <h2 className="section__title" data-fade="true">
          会社概要
        </h2>
        <p className="about__text" data-fade="true">
          ForOneは「一人ひとりの悩みに寄り添う」をミッションに掲げ、
          <br />
          最先端の生成AIを活用したソリューションを提供しています。
          <br />
          テクノロジーと人間らしさを融合させ、真に役立つAIの実現を目指しています。
        </p>

        <div className="about__cards">
          <div className="card" data-fade="true">
            <span className="card__number">01</span>
            <h3>ミッション</h3>
            <p>一人ひとりの悩みに寄り添い、AIの力で解決する</p>
          </div>
          <div className="card" data-fade="true">
            <span className="card__number">02</span>
            <h3>ビジョン</h3>
            <p>AIと人間が共生する、より良い社会の実現</p>
          </div>
          <div className="card" data-fade="true">
            <span className="card__number">03</span>
            <h3>バリュー</h3>
            <p>共感・革新・誠実・継続的成長</p>
          </div>
        </div>

        <div className="company-info" data-fade="true">
          <div className="info-item">
            <h4>設立</h4>
            <p>2022年4月</p>
          </div>
          <div className="info-item">
            <h4>代表取締役</h4>
            <p>山田 太郎</p>
          </div>
          <div className="info-item">
            <h4>所在地</h4>
            <p>東京都渋谷区神宮前X-X-X</p>
          </div>
          <div className="info-item">
            <h4>従業員数</h4>
            <p>25名（2024年4月現在）</p>
          </div>
        </div>
      </section>

      {/* ────────── 4. CASE STUDIES ────────── */}
      <section id="cases" className="section cases">
        <h2 className="section__title" data-fade="true">
          導入事例
        </h2>
        <p className="section-description" data-fade="true">
          ForOneのAIソリューションが様々な企業や個人の課題をどのように解決したか、実際の事例をご紹介します。
        </p>

        <div className="cases-grid">
          <div className="case" data-fade="true">
            <div className="case-image">
              <Image src="/case-study-1.png" alt="Case Study 1" width={600} height={400} className="rounded-image" />
            </div>
            <div className="case-content">
              <div className="case-tag">小売業</div>
              <h3>A社様 - カスタマーサポートAI導入</h3>
              <p>
                問い合わせ対応時間を80%削減し、顧客満足度が25%向上。24時間対応のAIチャットボットにより、売上も15%増加しました。
              </p>
              <Link href="#" className="btn-outline btn-sm">
                詳細を見る
              </Link>
            </div>
          </div>

          <div className="case" data-fade="true">
            <div className="case-image">
              <Image src="/case-study-2.png" alt="Case Study 2" width={600} height={400} className="rounded-image" />
            </div>
            <div className="case-content">
              <div className="case-tag">医療</div>
              <h3>B病院様 - 診断支援AIシステム</h3>
              <p>
                医師の診断精度を12%向上させ、患者の待ち時間を30%短縮。AIによる初期診断で、医師の負担を大幅に軽減しました。
              </p>
              <Link href="#" className="btn-outline btn-sm">
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 5. CONTACT ────────── */}
      <footer id="contact" className="section contact gradient-bg">
        <h2 className="section__title" data-fade="true">
          お問い合わせ
        </h2>
        <p className="contact-description" data-fade="true">
          AIソリューションについてのご質問や、導入のご相談など、お気軽にお問い合わせください。
          <br />
          専門スタッフが丁寧にご対応いたします。
        </p>
        <div className="contact-buttons" data-fade="true">
          <Link href="mailto:info@forone.ai" className="btn btn-lg">
            メールでのお問い合わせ
          </Link>
          <Link href="tel:0312345678" className="btn-outline btn-lg">
            03-1234-5678
          </Link>
        </div>
        <div className="footer-bottom">
          <div className="social-links">
            <Link href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="social-icon"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="social-icon"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </div>
          <small>&copy; 2024 ForOne Inc. All Rights Reserved.</small>
        </div>
      </footer>
    </main>
  )
}
