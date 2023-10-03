import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const PropertyDetails = ({ properties }) => {

    const { id } = useParams();
    const [PropertyDetail, setPropertyDetail] = useState(properties[id.split(':')[1] - 1])
    console.log(PropertyDetail);
    console.log(PropertyDetail?.image);
    return (
        <div className="h-[75vh]  w-screen border dark:bg-gray-800 dark:text-gray-50">
            <div className="w-[100%] border h-full flex ">
                <div className={`bg-[url(${PropertyDetail?.image})] w-[50%]  flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto`}>

                </div>
                <div className="relative w-[50%] flex justify-center items-center h-full">
                    <div className="shadow  w-full h-full flex flex-col justify-center p-4   bg-white">
                        <div className="mt-4">
                            <h2 className="font-medium text-xl md:text-3xl text-gray-800 line-clamp-1" title="New York">
                                {PropertyDetail.name}
                            </h2>
                            <p className="mt-2 text-xl text-gray-800 line-clamp-1" title="New York, NY 10004, United States">
                                Azad Nagar 10004, India
                            </p>
                        </div>

                        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
                            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                                <svg className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"></path></svg>
                                <span className="mt-2 xl:mt-0">
                                    3 Rooms
                                </span>
                            </p>
                            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                                <svg className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5V19M3 16H21M21 19V13.2C21 12.0799 21 11.5198 20.782 11.092C20.5903 10.7157 20.2843 10.4097 19.908 10.218C19.4802 10 18.9201 10 17.8 10H11V15.7273M7 12H7.01M8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                <span className="mt-2 xl:mt-0">
                                    4 Bed
                                </span>
                            </p>
                            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                                <svg className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 20.5C12.6493 20.5 13.364 20.4831 14.0982 20.4555C14.3558 20.4458 14.4845 20.441 14.7053 20.4186C17.983 20.0867 20.7773 17.1854 20.9859 13.8977C21 13.6762 21 13.4784 21 13.0827C21 13.0059 21 12.9675 20.9979 12.9351C20.9653 12.4339 20.5661 12.0347 20.0649 12.0021C20.0325 12 19.9941 12 19.9173 12M4.08268 12C4.00591 12 3.96752 12 3.93511 12.0021C3.43395 12.0347 3.0347 12.4339 3.00211 12.9351C3 12.9675 3 13.0059 3 13.0827C3 13.4784 3 13.6762 3.01406 13.8977C3.19458 16.742 5.31032 19.2971 8 20.1495" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6 20L5 22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M18 20L19 22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 12H14M22 12H18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2.25 13C2.25 13.4142 2.58579 13.75 3 13.75C3.41421 13.75 3.75 13.4142 3.75 13H2.25ZM7.59973 3.49934L8.29609 3.22079L8.29609 3.22079L7.59973 3.49934ZM7.97885 4.44713L8.30713 5.12147L7.97885 4.44713ZM6.36212 6.19232L7.05701 6.47451L6.36212 6.19232ZM10.577 4.37783L10.2824 5.06753L10.577 4.37783ZM6.34559 8.74156L5.6478 9.01651C5.72221 9.20535 5.86997 9.35596 6.05735 9.43396C6.24473 9.51197 6.45572 9.51069 6.64215 9.43044L6.34559 8.74156ZM12.3063 6.17548L12.6029 6.86436C12.975 6.70417 13.1526 6.27744 13.0041 5.90053L12.3063 6.17548ZM3.75 13V4.38516H2.25V13H3.75ZM5.38516 2.75C6.05379 2.75 6.65506 3.15708 6.90338 3.77788L8.29609 3.22079C7.81998 2.0305 6.66715 1.25 5.38516 1.25V2.75ZM3.75 4.38516C3.75 3.48209 4.48209 2.75 5.38516 2.75V1.25C3.65366 1.25 2.25 2.65366 2.25 4.38516H3.75ZM6.90338 3.77788L7.2825 4.72568L8.67521 4.16859L8.29609 3.22079L6.90338 3.77788ZM7.04337 8.46661C6.80167 7.85321 6.78638 7.14092 7.05701 6.47451L5.66723 5.91014C5.24692 6.94515 5.26959 8.05665 5.6478 9.01651L7.04337 8.46661ZM12.0098 5.4866L6.04903 8.05268L6.64215 9.43044L12.6029 6.86436L12.0098 5.4866ZM10.2824 5.06753C10.9039 5.33307 11.367 5.83741 11.6086 6.45043L13.0041 5.90053C12.6258 4.94029 11.887 4.12189 10.8717 3.68813L10.2824 5.06753ZM7.05701 6.47451C7.31118 5.8486 7.76827 5.3838 8.30713 5.12147L7.65058 3.77279C6.78337 4.19496 6.06253 4.93671 5.66723 5.91014L7.05701 6.47451ZM8.30713 5.12147C8.91452 4.82579 9.62506 4.78672 10.2824 5.06753L10.8717 3.68813C9.79386 3.22768 8.62874 3.29661 7.65058 3.77279L8.30713 5.12147Z" fill="#1C274C"></path> </g></svg>
                                <span className="mt-2 xl:mt-0">
                                    1 Bath
                                </span>
                            </p>
                            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                                <svg className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path></svg>
                                <span className="mt-2 xl:mt-0">
                                    732 /sq.ft
                                </span>
                            </p>

                        </div>

                        <div className="grid grid-cols-2 mt-8">
                            <div className="flex items-center">
                                <div className="relative">
                                    <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
                                    <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                                </div>

                                <p className="ml-2 text-gray-800 line-clamp-1">
                                    Daksh Singh
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                                    <span className="text-sm uppercase">
                                        $
                                    </span>
                                    <span className="text-lg">3,200</span>/day
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PropertyDetails
