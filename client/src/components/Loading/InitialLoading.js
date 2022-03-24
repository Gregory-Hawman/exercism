import React from 'react';

export default function InitialLoading({loading}) {

    return (
        <div className="flex flex-col justify-center items-center h-[30rem]">
            Loading
            <div>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.504 11.3413L20.208 17.8133" stroke="#5C5589" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.33337 25.3413L12.9414 27.8133" stroke="#5C5589" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.33337 42.6453L12.9414 40.1733" stroke="#5C5589" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.504 56.6453L20.208 50.1733" stroke="#5C5589" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M31.9626 61.992V53.992" stroke="#5C5589" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M48.4214 56.6453L43.7174 50.1733" stroke="#5C5589" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M58.592 42.6453L50.984 40.1733" stroke="#5C5589" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M58.592 25.3413L50.984 27.8133" stroke="#5C5589" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M48.4214 11.3413L43.7174 17.8133" stroke="#5C5589" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M31.9626 1.992V17.992" stroke="#5C5589" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}