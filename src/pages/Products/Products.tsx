import {
  PageWrapper,
  PhotoFrame,
  PhotoWrapper,
  DescriptionFrame,
  ToolInfo,
  UserInfo,
  ButtonControl,
  ProductImageControl,
  ProfileImageControl,
} from './styles'
import Button from 'components/Button/Button'
import Card from 'components/Card/Card'

import { UserImg } from "assets"


function Products() {
  const nextImage = () => {}

  const prevImage = () => {}

  return (
    <PageWrapper>
      <PhotoWrapper>
        <ButtonControl>
          <Button name="〈" isTransparent onClick={prevImage} />
        </ButtonControl>
        <PhotoFrame>
          <ProductImageControl src='https://mrt.az/storage/products/March2021/S8DPLEBP2gCdUI3f7pgS.jpg' />
        </PhotoFrame>
        <ButtonControl>
          <Button name="〉" isTransparent onClick={nextImage} />
        </ButtonControl>
      </PhotoWrapper>
      <DescriptionFrame>
        <ToolInfo>
          <p>Title: </p>
          <p>Category: </p>
          <p>Price: </p>
          <p>Description: </p>
          {/* <Card /> */}</ToolInfo>
        <UserInfo>
          <ProfileImageControl src={UserImg}/>
          <p>Username</p>
          {/* <ProfileCard /> */}
          <Button name="Send message" />
          <Button name="Show phone" />
        </UserInfo>
      </DescriptionFrame>
    </PageWrapper>
  )
}

export default Products
