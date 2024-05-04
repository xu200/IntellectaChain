// 在NFTCard.tsx中
import { useState } from "react";
import { Address, AddressInput } from "../scaffold-eth";
import { Collectible } from "./MyHoldings";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { wrapInTryCatch } from "~~/utils/scaffold-eth/common";

export const NFTCard = ({ nft }: { nft: Collectible }) => {
  const [transferToAddress, setTransferToAddress] = useState("");

  const { writeAsync: transferNFT } = useScaffoldContractWrite({
    contractName: "YourCollectible",
    functionName: "transferFrom",
    args: [nft.owner, transferToAddress, BigInt(nft.id.toString())],
  });

  return (
    <div className="card card-compact bg-base-100 shadow-lg sm:min-w-[300px] shadow-secondary">
      <figure className="relative">
        <img src="https://gray-rare-dog-631.mypinata.cloud/ipfs/QmT4GjnbksxJ3v2s4B2Nk9Z9XMXU3wPcriyjcXbZytqC3J/buffalo.jpg" alt="NFT Image" className="h-60 min-w-full" />
        <figcaption className="glass absolute bottom-4 left-4 p-4 w-25 rounded-xl">
          <span className="text-white "># {nft.id}</span>
        </figcaption>
      </figure>
      <div className="card-body space-y-3">
        <div className="flex items-center justify-center">
          <p className="text-xl p-0 m-0 font-semibold">Buffalo</p>
          <div className="flex flex-wrap space-x-2 mt-1">
            {nft.attributes?.map((attr, index) => (
              <span key={index} className="badge badge-primary py-3">
                {attr.value}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center mt-1">
          <p className="my-0 text-lg">It is actually a bison?</p>
        </div>
        <div className="flex space-x-3 mt-1 items-center">
          <span className="text-lg font-semibold">版权拥有者 : </span>
          <Address address={nft.owner} />
        </div>
        <div className="flex flex-col my-2 space-y-1">
          <span className="text-lg font-semibold mb-1">版权转增至: </span>
          <AddressInput
            value={transferToAddress}
            placeholder="接收者地址"
            onChange={newValue => setTransferToAddress(newValue)}
          />
        </div>
        <div className="card-actions justify-end">
          <button
            style={{
              textAlign: 'center',
              margin: '0% auto',
            }}
            className="btn btn-secondary btn-md px-8 tracking-wide"
            onClick={wrapInTryCatch(transferNFT, "transferNFT")}
          >
            发送
          </button>
        </div>
      </div>
    </div>
  );
};
