import React, {useState, useEffect} from 'react';
import QRCode from 'qrcode';

const Dashboard = () => {

  const [src, setSrc] = useState('')
  const [src2, setSrc2] = useState('')
  const [contents, setContents] = useState('3fddc774-5fde-4516-ba0d-7ba94c9554a5')
  const [contents2, setContents2] = useState('https://google.com asdasd asd asdasdas asd asdasds dsd asdasd asdasd sad sd asd asd asd ')

  useEffect(() => {
    QRCode.toDataURL(contents).then((data) => {
     setSrc(data)
    })
    QRCode.toDataURL(contents2).then((data) => {
     setSrc2(data)
    })
  }, [])

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-indigo-50 to-indigo-100">
      <div className="p-5 bg-white shadow-md rounded-xl w-96">
        <h2 className="text-4xl text-center">This is <span className="font-bold">not garbage!</span></h2>
        <div className="flex justify-center items-center">
          <div className="flex w-40 bg-orange">
            <img className="object-contain w-full " src={src} />
          </div>
          {/* <img className="object-contain w-full " src={'../milk-bottle.png'} /> */}
          <div className="flex flex-1">
            <p className="text-xl break-normal">Scan with the <span className="font-bold">UGT</span> app to claim your deposit!</p>
          </div>
        </div>
      </div>
      <br/>
      {/* <div className="p-3 bg-white shadow-md rounded-xl w-96">
        <h2 className="text-4xl text-center">This is <span className="font-bold">not garbage!</span></h2>
        <div className="flex justify-center items-center">
          <div className="flex w-40 bg-orange">
            <img className="object-contain w-full " src={src2} />
          </div>
          <div className="flex flex-1">
            <p className="text-xl break-normal">Scan with the <span className="font-bold">Un-Garbage Truck</span> app to claim your deposit!</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;