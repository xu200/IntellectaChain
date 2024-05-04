import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 w-[90%] md:w-[75%]">
        <h1 className="text-center mb-6">
          <span className="block text-2xl mb-2">智慧版权</span>
          <span className="block text-4xl font-bold">版权知识与保护</span>
        </h1>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/hero.jpeg"
            width="500"
            height="100"
            alt="challenge banner"
            className="rounded-xl border-4 border-primary"
          />
          <div className="max-w-3xl">
            <p className="text-center text-lg mt-8">
              🏗️ "智慧版权"致力于构建一个基于区块链的资源版权管理平台。
              通过创新的数字化手段，我们对各类资源进行版权登记、管理和保护，这不仅包括文本和图片，还涵盖音乐、视频、软件等所有形式的创意作品。
              我们的目标是让每一份智慧成果都能得到合理的利用和尊重，确保创作者的权益得到充分保护。📚🖋️
            </p>
            <p className="text-center text-lg">
            🌈 通过"智慧版权"项目，我们希望能够为创作者提供一个可靠的版权保护环境，激发更多的创新和创作，推动整个社会的文化和科技发展。🌟🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
