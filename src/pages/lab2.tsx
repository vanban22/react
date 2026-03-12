import { Table } from 'antd'

function lab2() {
    const colums = [
        { title: "Id", dataIndex: "id" },
        { title: "Name", dataIndex: "name" },
        { title: "Age", dataIndex: "age" },
        { title: "Major", dataIndex: "major" },

    ]
    const data = [
        { key: 1,id:1, name: "John", age: 25, major: "IT" },
        { key: 2,id:2, name: "anna", age: 30, major: "TKDH" },
        { key: 3,id:3, name: "jack", age: 31, major: "maketting" },
    ]
    const columns = [
        { title: "Id", dataIndex: "id" },
        { title: "Name", dataIndex: "name" },
        { title: "Email", dataIndex: "email" },
        {
            title: "Status", dataIndex: "status", render: (status: any) => (
                <span style={{ color: status === "active" ? "green" : "red" }}>
                    {status}
                </span>
            )
        },
        {
            title: "Action",
            render: (_: any, record: any) => (
                <>
                    <button >Edit</button>
                    <button >Delete</button>
                </>
            ),
        },
    ]
    const datas = [
        { key: 1, id: 1, name: "John", email: "a@gmail.com", status: "active" },
        { key: 2, id: 2, name: "John", email: "a@gmail.com", status: "inactive" },

    ]
    const column = [
        { title: "ID", dataIndex: "id" },
        { title: "Product Name", dataIndex: "productname" },
        { title: "Price", dataIndex: "price" },
        { title: "Category", dataIndex: "category" },

    ]
    const datass = [
        { key: 1, id: 1, productname: "Laptop Dell", price: 1500, category: "Laptop" },
        { key: 2, id: 2, productname: "iPhone 14", price: 1200, category: "Phone" },
        { key: 3, id: 3, productname: "Samsung Tab", price: 800, category: "Tablet" },
        { key: 4, id: 4, productname: "Macbook Pro", price: 2200, category: "Laptop" },
    ]
    return (
        <div>
            <h1>Danh sách sinh viên</h1>
            <Table columns={colums} dataSource={data}></Table>
            <h1>User Management</h1>
            <Table columns={columns} dataSource={datas} ></Table>
            <h1> Danh sách sản phẩm</h1>
            <Table columns={column} dataSource={datass} pagination={{ pageSize: 3 }}></Table>
        </div>
    )

}

export default lab2