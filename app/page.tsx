import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import * as React from 'react'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
        <ol className={styles.steps}>
          <li>Plug in your devices to a USB port. We will install firmware to it.</li>
          <li id="coms">Hit &lsquo;Connect&rsquo; and select the correct COM port.</li>
          <li>Get firmware installed and connected in less than 3 minutes!</li>
        </ol>
        <div className={styles.connect}>
          <esp-web-install-button manifest="https://firmware.esphome.io/esphome-web/manifest.json" />
        </div>
      </div>
      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <Link href="https://owkor.com">
          <Image
            src="/owkor.svg"
            alt="Owkor Logo"
            width={24}
            height={24}
            priority
          />
        </Link>
        <Link
          href="https://github.com/zomco/owkor"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />
        </Link>
      </div>
      <Script src="https://unpkg.com/esp-web-tools@9/dist/web/install-button.js?module" />
    </main>
  )
}
