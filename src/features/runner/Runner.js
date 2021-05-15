import React from 'react';
import { Calendar } from 'antd';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';
import { Button, Badge } from 'antd';

const Runner = () => {
    const runningList = useSelector((state) => state.runner.exampleList);
    
    // 달력 선택 이벤트
    const onPanelChange = (value, mode) => {
      console.log(value.format('YYYY-MM-DD'), mode);
    }

    const getListData = (value) => {
        let listData = [];
        let calendarMonth = '0' + (value.month() + 1);
        let calendarDate = '0' + value.date();
        // "00" 양식으로 변경
        calendarMonth = calendarMonth.slice(-2);
        calendarDate = calendarDate.slice(-2);

        console.log(calendarMonth);
        console.log(calendarDate);

        runningList.forEach(running => {
            let splitedDate = running.completeDate.split("-");
            console.log(splitedDate);
            if (splitedDate[1] === calendarMonth && splitedDate[2] === calendarDate) {
                listData.push(running);
            }
        });

        console.log(listData);

        return listData || [];
    }

    // 일 목록 이벤트(각 월의 일자횟수만큼 발생)
    const dateCellRender = (value) => {
        const listData = getListData(value);

        return (
          <ul className="events">
            {listData.map((item, index) => (
              <li key={index}>
                <Badge status={item.type} text={item.title} />
              </li>
            ))}
          </ul>
        );
      }

    return (
        <div>
            <h1>
                달리기 매니저
            </h1>
            <Calendar dateCellRender={dateCellRender} onPanelChange={onPanelChange} />
            <Button type="primary">기록등록</Button>
        </div>
    );
};

export default Runner;