import React, { useState, useEffect } from "react"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Modal, Image } from "antd"
import { useSelector, useDispatch } from "react-redux"
import {
  asyncSetImage,
  asyncUpdateImage,
  asyncGetImage,
} from "../actions/imageAction"
import "../App.css"

const Profile = (props) => {
  const { user, profile } = useSelector((state) => {
    return state
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetImage())
  }, [dispatch])

  const [file, setFile] = useState("")

  const [open, setOpen] = useState(false)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleAddClick = () => {
    setOpen(true)
  }

  const handleUpdateClick = () => {
    setOpen(true)
  }

  const onOk = () => {
    const id = profile._id
    const formData = new FormData()
    formData.append("profile", file)
    if (Object.keys(profile).length > 0) {
      dispatch(asyncUpdateImage(id, formData))
    } else {
      dispatch(asyncSetImage(formData))
    }
    setOpen(false)
  }

  const onCancel = () => {
    setOpen(false)
  }

  return (
    <center className="profile">
      <h2>Account Information</h2>
      {Object.keys(profile).length > 0 ? (
        <Image
          width={100}
          src={`http://localhost:3333/profile/${profile.image}`}
        />
      ) : (
        <Avatar size={100} icon={<UserOutlined />} />
      )}
      <p>
        Name:<span className="font-style">{user.username}</span>
      </p>
      <p>
        Email:<span className="font-style">{user.email}</span>
      </p>
      <p>
        Timing Of Creation:<span className="font-style">{user.createdAt}</span>
      </p>
      {Object.keys(profile).length > 0 ? (
        <Button size="small" className="button-two" onClick={handleUpdateClick}>
          Update Profile
        </Button>
      ) : (
        <Button size="small" className="button-two" onClick={handleAddClick}>
          Add Profile
        </Button>
      )}
      <Modal
        title="Profile-Information"
        open={open}
        onOk={onOk}
        onCancel={onCancel}
      >
        <input type="file" name="file" onChange={handleFileChange} />
      </Modal>
    </center>
  )
}

export default Profile 