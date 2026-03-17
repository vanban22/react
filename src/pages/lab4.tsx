import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Input, Form, Button, Checkbox, Select } from "antd";
import axios from "axios"
import toast from "react-hot-toast";
interface category {
    id: number,
    title: string,
    description: string,
    active: string
}
export default function storyForm() {
    const { data: categories, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/categories");
            return res.data;
        }
    });
    const queryClient = useQueryClient();
    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: async (values: category) => {
            await axios.post("http://localhost:3000/categories", values);
        },
        onSuccess: () => {
            toast.success("thành cong")
             queryClient.invalidateQueries({
        queryKey: ["categories"]
        })},
        onError: () => {
            toast.error("that bai")
        }
    })
    const onFinish = (values: any) => {
        mutate(values)
    }

    return (
        <div>
            <div>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Title" name="title"
                        rules={[
                            { required: true, message: "Vui lòng nhập" },
                        ]}>
                        <Input placeholder="title" />

                    </Form.Item>

                    <Form.Item label="Description" name="description ">
                        <Input.TextArea placeholder="Description " />
                    </Form.Item>

                    <Form.Item name="active">
                        <Checkbox>Action</Checkbox>
                    </Form.Item>
                    <Button htmlType="submit" type="primary" loading={isPending}>Submit</Button>
                </Form>
            </div>


            <div>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Title" name="title"
                        rules={[
                            { required: true, message: "Vui lòng nhập" },
                        ]}>
                        <Input placeholder="title" />

                    </Form.Item>

                    <Form.Item label="Description" name="description ">
                        <Input.TextArea placeholder="Description " />
                    </Form.Item>

                    <Form.Item name="active">
                        <Checkbox>Action</Checkbox>
                    </Form.Item>
                    <Form.Item label="Category" name="categoryId">
                        <Select
                            loading={isLoading}
                            placeholder="Chọn danh mục"
                            options={categories?.map((item: category) => ({
                                value: item.id,
                                label: item.title
                            }))}
                        />
                    </Form.Item>

                    <Button htmlType="submit" type="primary" loading={isPending}>Submit</Button>
                </Form>
            </div>


        </div>



    )
}