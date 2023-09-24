import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { getUserInfo, submitLogin } from "../redux/actions";

const LoginWrap = () => {
  const dispatch = useDispatch();

  const [u, setU] = useState<any>("");
  const [p, setP] = useState<any>("");

  const handleLoginSuccess: any = (rs: any) => {
    dispatch(getUserInfo(rs.credential));
  };

  const handlSubmitLogin = () => {
    dispatch(submitLogin(u, p));
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Đăng nhập</h1>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Tên đăng nhập"
                        autoComplete="username"
                        onChange={(e) => {
                          setU(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Mật khẩu"
                        autoComplete="current-password"
                        onChange={(e) => {
                          setP(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={handlSubmitLogin}
                        >
                          Đăng nhập
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Quên mất khẩu?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Social</h2>
                    <p>Đăng nhập bằng tài khoản google</p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        <GoogleOAuthProvider
                          clientId={
                            "239779350264-1st02u69cqstmlm4d3f8s2mn56s4p0v5.apps.googleusercontent.com"
                          }
                        >
                          <GoogleLogin
                            onSuccess={handleLoginSuccess}
                            onError={() => {}}
                          />
                        </GoogleOAuthProvider>
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default LoginWrap;
