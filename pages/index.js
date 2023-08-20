import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillFacebook, AiFillGithub, AiFillInstagram} from "react-icons/ai";
import dinan from '../public/avatar.jpg';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/webnew1.jpg';
import web2 from '../public/webnew2.jpg';
import web3 from '../public/webnew3.jpg';
import web4 from '../public/webnew4.jpg';
import Link from 'next/link'
import {useState} from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Dinannn Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-black text-2xl font-burtons">dinannn</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" /></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 px-2 rounded-md ml-8 font-medium" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">

          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">Muhammad Dinan</h2>
          <h3 className="text-black text-2xl py-2 dark:text-white md:text-3xl">Students and developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto">Lazy students try to understanding Programming Language.</p>

          </div>
          <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-400">

          <a target="_blank" href="https://facebook.com/muhammad.dinan.161" rel="noopener noreferrer"><AiFillFacebook/></a>
          <a target="_blank" href="https://github.com/dxlgnds" rel="noopener noreferrer"><AiFillGithub/></a>
          <a target="_blank" href="https://instagram.com/dxryzzz" rel="noopener noreferrer"><AiFillInstagram/></a>


          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96">

          <Image src={dinan} layout="fill" objectFit="cover"/>

          </div>
        </section>

        <section>
          <div>
          <h3 className="text-3xl py-1 dark:text-white">My Journey</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">I start to learn <span className="text-teal-500">front end</span> language like HTML , CSS , JS and some javascript frameworks (React JS, Next JS , Node JS) <span className="text-teal-500">Since 2020</span>. And untill now i'm still learning more Programming language and frameworks ! </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">I really like to coding because coding is fun , but sometimes it makes me confused.</p>
          </div>

            <div className="lg:flex gap-10">

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">

            <Image src={design} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">I have some experience about design.</p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Canva</p>

            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">

            <Image src={code} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">Coding skills</h3>
            <p className="py-2">I also learn front end language.</p>
            <h4 className="py-4 text-teal-600">Front end skills</h4>
            <p className="text-gray-800 py-1">HTML</p>
            <p className="text-gray-800 py-1">CSS</p>
            <p className="text-gray-800 py-1">Javascript</p>
            <p className="text-gray-800 py-1">React JS & Next JS</p>

            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={consulting} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">Lets Be Friends</h3>
            <p className="py-2">Lets talk with me in social media.</p>
            <h4 className="py-4 text-teal-600">My social media</h4>
            <p className="text-gray-800 py-1">Facebook : Dinan Valientt</p>
            <p className="text-gray-800 py-1">Instagram : mhmddinan_
  </p>
            <p className="text-gray-800 py-1">Threads : mhmddinan_</p>

            </div>

            </div>        
        </section>

        <section>

        <div>

        <h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">I start to learn <span className="text-teal-500">front end</span> language like HTML , CSS , JS and some javascript frameworks (React JS, Next JS , Node JS) <span className="text-teal-500">Since 2020</span>. And untill now i'm still learning more Programming language and frameworks ! </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">I really like to coding because coding is fun , but sometimes it makes me confused.</p>

        </div>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

        <div className="basis-1/3 flex-1">

        <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>

        </div>

        <div className="basis-1/3 flex-1">

        <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>

        </div>

        <div className="basis-1/3 flex-1">

        <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>

        </div>

        <div className="basis-1/3 flex-1">

        <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>

        </div>

        </div>

        </section>

      </main>
    </div>
  )
}
