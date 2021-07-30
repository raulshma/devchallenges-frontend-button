import React from 'react';
import Button from '../components/Button';
import { MdAdd, MdShoppingCart } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col h-screen font-mono">
      <main className="px-4 md:px-10 lg:px-16 pt-4 pb-10 flex flex-col flex-grow overflow-y-auto gap-10">
        <h1 className="text-4xl text-gray-700">Buttons</h1>
        {/* Basic */}
        <div className="flex gap-12">
          <div className="w-52">
            <h2 className="text-xs mb-2">&lt;Button /&gt;</h2>
            <Button />
          </div>
          <div>
            <h2 className="text-xs text-gray-400 mb-2">
              &amp;:hover, &amp;:focus
            </h2>
            <Button className="btn text-white bg-blue-800 hover:bg-blue-800 focus:bg-blue-800 focus:border-none shadow-lg" />
          </div>
        </div>
        {/* Variant Outline */}
        <div className="flex gap-12">
          <div className="w-52">
            <h2 className="text-xs mb-2">&lt;Button variant="outline" /&gt;</h2>
            <Button variant="outline" />
          </div>
          <div>
            <h2 className="text-xs text-gray-400 mb-2">
              &amp;:hover, &amp;:focus
            </h2>
            <Button
              variant="outline"
              className={
                'btn border-2 border-blue-600 bg-blue-100 text-blue-800 shadow-lg'
              }
            />
          </div>
        </div>
        {/* Variant Text */}
        <div className="flex gap-12">
          <div className="w-52">
            <h2 className="text-xs mb-2">&lt;Button variant="text" /&gt;</h2>
            <Button variant="text" />
          </div>
          <div>
            <h2 className="text-xs text-gray-400 mb-2">
              &amp;:hover, &amp;:focus
            </h2>
            <Button
              variant="text"
              className={'btn border-none bg-blue-100 text-blue-800'}
            />
          </div>
        </div>
        {/* Shadow Disable */}
        <div>
          <h2 className="text-xs mb-2">&lt;Button disableShadow /&gt;</h2>
          <Button disableShadow />
        </div>
        {/* Disable */}
        <div className="flex gap-12">
          <div className="w-52">
            <h2 className="text-xs mb-2">&lt;Button disable /&gt;</h2>
            <Button disable />
          </div>
          <div>
            <h2 className="text-xs mb-2">
              &lt;Button variant="text" disable /&gt;
            </h2>
            <Button variant="text" disable />
          </div>
        </div>
        {/* Start and End Icons */}
        <div className="flex gap-12">
          <div className="w-52">
            <h2 className="text-xs mb-2">
              &lt;Button startIcon={'{'}MdAdd{'}'} /&gt;
            </h2>
            <Button startIcon={MdAdd} />
          </div>
          <div>
            <h2 className="text-xs mb-2">
              &lt;Button endIcon={'{'}MdShoppingCart{'}'} /&gt;
            </h2>
            <Button endIcon={MdShoppingCart} />
          </div>
        </div>
        {/* Size */}
        <div className="flex flex-wrap gap-12">
          <div className="w-52">
            <h2 className="text-xs mb-2">&lt;Button size="sm" /&gt;</h2>
            <Button size="sm" />
          </div>
          <div className="w-52">
            <h2 className="text-xs mb-2">&lt;Button size="md" /&gt;</h2>
            <Button size="md" />
          </div>
          <div>
            <h2 className="text-xs mb-2">&lt;Button size="lg" /&gt;</h2>
            <Button size="lg" />
          </div>
        </div>
        {/* Color */}
        <div className="flex flex-wrap gap-12">
          <div className="w-52">
            <h2 className="text-xs mb-2">&lt;Button color="primary" /&gt;</h2>
            <Button color="primary" />
          </div>
          <div className="w-52">
            <h2 className="text-xs mb-2">&lt;Button color="secondary" /&gt;</h2>
            <Button color="secondary" />
          </div>
          <div>
            <h2 className="text-xs mb-2">&lt;Button color="danger" /&gt;</h2>
            <Button color="danger" />
          </div>
        </div>
        {/* Color States */}
        <div className="flex flex-wrap gap-12">
          <div className="w-52">
            <h2 className="text-xs text-gray-400 mb-2">&amp;:hover, focus</h2>
            <Button className="btn text-white bg-blue-800 focus:border-none shadow-md" />
          </div>
          <div className="w-52">
            <h2 className="text-xs mb-2"> </h2>
            <Button className="btn text-white bg-purple-900 focus:border-none shadow-md" />
          </div>
          <div>
            <h2 className="text-xs mb-2"> </h2>
            <Button className="btn text-white bg-red-800 focus:border-none shadow-md" />
          </div>
        </div>
        <div className="inline-flex flex-wrap gap-2 text-indigo-700 font-semibold">
          <p>Icons:</p>
          <a
            href="https://react-icons.github.io/react-icons/"
            target="__blank"
            rel="noopener"
          >
            https://react-icons.github.io/react-icons
          </a>
        </div>
      </main>
      <footer className="footer flex-wrap">
        <p>created by raulshma</p>
        <a href="https://github.com/raulshma" target="__blank" rel="noopener">
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://devchallenges.io/portfolio/raulshma"
          target="__blank"
          rel="noopener"
        >
          devChallenges.io
        </a>
      </footer>
    </div>
  );
}
