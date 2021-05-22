import React from "react";
import { Modal } from 'antd';

const SaveRecord = ({isSaveRecord, handleSaveRecordOk, handleSaveRecordCancel}) => {
    return (
        <div>
            <Modal
                title="기록 등록"
                visible={isSaveRecord}
                onOk={handleSaveRecordOk}
                onCancel={handleSaveRecordCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};

export default SaveRecord;
