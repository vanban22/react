import { Button, Form, Input, Select } from "antd";
import { useState } from "react";

function lab3() {
    const onFinish = (values: any) => {
        console.log("Form data", values);
        setData(values)
    }
    const [data,setData]=useState<any>(null);
   
    
    return (
        <div>
            <Form layout="vertical" onFinish={onFinish} >
                <Form.Item label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Vui lòng nhập email" },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Password"
                    name="password"
                    rules={[
                        { required: true, message: "Vui lòng nhập password" },
                    ]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>


            <Form layout="vertical" onFinish={onFinish} >
                <Form.Item label="Name"
                    name="name"
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Vui lòng nhập email" },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Phone"
                    name="phone"

                >
                    <Input />
                </Form.Item>

                <Form.Item label="Password"
                    name="password"
                    rules={[
                        { required: true, message: "Vui lòng nhập password" },
                    ]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                        { required: true },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject("Password không trùng");
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>

            <Form layout="vertical" onFinish={onFinish} >
                <Form.Item label="Name"
                    name="name"

                >
                    <Input />
                </Form.Item>
                <Form.Item label="Price"
                    name="price"

                >
                    <Input />
                </Form.Item>

                <Form.Item label="Soluong"
                    name="soluong"

                >
                    <Input />
                </Form.Item>

                <Form.Item label="Mota"
                    name="mota"
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Title"
                    name="title"
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Category"
                    name="category"

                >
                    <Select placeholder="chọn"
                        options={[
                            { label: "Laptop", value: "Laptop" },
                            { label: "Mobile", value: "Mobile" },
                            { label: "Table", value: "Table" }
                        ]}
                    ></Select>
                   
                </Form.Item>
                <Form.Item label="Slug"
                    name="slug"
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Content"
                    name="content"
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label="Image"
                    name="image"
                >
                    <Input />
                </Form.Item>
                <Button htmlType="submit" type="primary">Thêm</Button>
            </Form>
            {data &&(
                <div>
                    <h3>Dữ liệu</h3>
                    <p>Title:{data.title} </p>
                    <p>Category:{data.category} </p>
                    <p>Slug: {data.slug}</p>
                    <p>Content:{data.content} </p>
                    <p>Image:{data.image} </p>
                </div>
            )}
        </div>

    )
}

export default lab3
