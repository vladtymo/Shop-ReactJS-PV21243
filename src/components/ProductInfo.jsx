import { DotChartOutlined, LeftOutlined } from '@ant-design/icons';
import { Image, Tag, Flex, Divider, Form, Radio, Skeleton, Space, Switch, Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const api = "https://shop-pd211-awdhcvf3ebdpb7es.polandcentral-01.azurewebsites.net/api/products/";

export default function ProductInfo() {

    const [item, setItem] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(api + id)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    return (
        <div>
            <Button onClick={() => navigate(-1)} color="default" variant="text" icon={<LeftOutlined />}></Button>
            {
                item ?
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.categoryName}</p>
                        <hr />
                        <Image
                            width={200}
                            src={item.imageUrl}
                        />
                        <p>Price: {item.price}$</p>
                        <p>Discount: {item.discount}%</p>
                        <p>Availability: {item.quantity > 0 ?
                            <Tag color="green">{item.quantity}</Tag>
                            :
                            <Tag color="volcano">Out of Stock</Tag>}</p>

                        <p>{item.description}</p>
                    </div>
                    :
                    <Flex gap="middle" vertical>
                        <Space>
                            <Skeleton.Input active />
                            <Skeleton.Input active />
                        </Space>
                        <Skeleton
                            paragraph={{
                                rows: 0,
                            }}
                        />
                        <Skeleton.Image size />
                        <Skeleton active />
                    </Flex>
            }
        </div >
    )
}
