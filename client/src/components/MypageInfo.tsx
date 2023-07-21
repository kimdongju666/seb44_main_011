import { useEffect, useState } from "react";
import { styled } from "styled-components";
import UserInfo from "../assets/imgs/UserInfo.png";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal";
// import EditProfile from "./EditProfile";

// type PropsType = {
//   selectedImage: string;
// };

export function MypageInfo() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  console.log("selectedImage:", selectedImage);
  console.log("nickname:", nickname);

  useEffect(() => {
    // 컴포넌트가 마운트될 때에만 실행되도록 useEffect를 사용하여 nickname 값을 localStorage에서 불러옵니다.
    const storedNickname = localStorage.getItem("nickname");
    const storedImage = localStorage.getItem("selectedImage");
    if (storedNickname && storedImage) {
      setNickname(storedNickname);
      setSelectedImage(storedImage);
    }
  }, []);

  const memberId = localStorage.getItem("memberId");

  const handleBtnEdit = () => {
    navigate("/mypage/edit");
  };

  const handleBtnUpload = () => {
    navigate("/mypage/upload");
  };

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <Wrapper>
      <UserInfoImg src={selectedImage} />
      <Profile>
        <UserName>{nickname}</UserName>
        <UserEmail>firerock@naver.com</UserEmail>
        <ButtonWrapper>
          <ProfileBtn onClick={handleBtnEdit}>프로필수정</ProfileBtn>
          {memberId === "30" ? (
            <UploadBtn onClick={handleBtnUpload}>음악업로드</UploadBtn>
          ) : (
            <DeleteBtn onClick={showModal}>회원탈퇴</DeleteBtn>
          )}
          {modalOpen && <DeleteModal setModalOpen={setModalOpen} />}
        </ButtonWrapper>
      </Profile>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 4px;
  gap: 44px;
  height: 300px;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const UserInfoImg = styled.img`
  width: 250px;
  height: 250px;
  box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 0.4);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
`;

const UserName = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 36px;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  line-height: 100%;
  text-align: left;
  margin-bottom: 20px;
`;

const UserEmail = styled.span`
  color: rgb(142, 142, 142);
  text-overflow: ellipsis;
  font-size: 24px;
  font-family: Quicksand, sans-serif;
  font-weight: 500;
  line-height: 120%;
  text-align: left;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const ProfileBtn = styled.button`
  width: 84px;
  height: 30px;
  border: 1px solid #8e8e8e;
  border-radius: 7px;
  color: #8e8e8e;
  background-color: #fff;
  margin-right: 20px;
  cursor: pointer;
`;
const DeleteBtn = styled.button`
  width: 84px;
  height: 30px;
  border: 1px solid #8e8e8e;
  border-radius: 7px;
  color: #8e8e8e;
  background-color: #fff;
  cursor: pointer;
`;

const UploadBtn = styled.button`
  width: 84px;
  height: 30px;
  border: 1px solid #8e8e8e;
  border-radius: 7px;
  color: #8e8e8e;
  background-color: #fff;
  cursor: pointer;
`;
