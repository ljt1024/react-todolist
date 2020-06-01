import React, { useState } from 'react';
import { Table, Tag, Space,  Form, Input, Button } from 'antd';
function Tables() {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'username',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Action',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={()=>handleClick(record.key)}>Delete</a>
                </Space>
            ),
        },
    ];
    const [form] = Form.useForm();
    const [data , setData ] = useState([{username:'lbc',age:'24',id:'1',key:'1'}]);
    function handleClick(key){
        console.log(key)
        setData(data.filter(item => item.key !== key));
    }
    function submit() {
        let datas=data.concat(form.getFieldsValue())
        datas[datas.length-1].id=datas.length
        datas[datas.length-1].key=datas.length
        setData(datas)
    }
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const box = 'box'
    const submitBox = 'submitBox'
        return (
            <div className={box}>
                <Table dataSource={data} columns={columns}/>
                <div className={submitBox}>
                    <Form
                        form={form}
                        {...layout}
                        name="basic"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="age"
                            name="age"
                            rules={[{ required: true, message: 'Please input your age!' }]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" onClick={submit}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )

}

export default Tables
