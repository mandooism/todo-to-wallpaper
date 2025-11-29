import React from 'react';
import { Link } from 'react-router-dom';
import Theme1 from '../components/Theme1'
import {useTodoItemsStore} from '../stores/todoItemsStore';

const Home = () => {
    const {todoItems} = useTodoItemsStore();

//     const todoItems = [
//         {
//             id: 1,
//             done: true,
//             text: "이마트 가기"
//         },
//         {
//             id: 2,
//             done: true,
//             text: "이마트 가기 이마트 가기 이마트 가기 이마트 가기 이마트 가기 이마트 가기 이마트 가기 이마트 가기 이마트 가기 이마트 가기"
//         }
//     ]

    return (
        <>
            <Theme1 todoItems={todoItems}/>
            <Link to="/view" state={todoItems}>
            <button>이미지로 보기</button>
            </Link>
        </>
    );
};

export default Home;
