import React from "react";
import GlobalLayout from "@layouts/GlobalLayout";
import { Formik, Form } from "formik";
import * as Yup from "yup";
//https://alvinuchenna.hashnode.dev/create-and-validate-a-form-in-react-js-using-formik
/* eslint-disable jsx-a11y/anchor-is-valid */

function SignUp() {
  const formInitialValues = {
    wmsID: "123",
    companyNumber: "123",
    // marketInfos: '',
    // addr: '',
    // mobile: '',
    // tel: '',
    // companyName: '',
    // managerName: '',
    // id: '',
    // pwd: '',
  };

  const phoneRegExp = /^\d{2,3}-?\d{3,4}-?\d{4}$/;
  const mobileRegExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;

  const postSignUpSchema = Yup.object().shape({
    wmsID: Yup.string().required("WMSID는 필수 입력 항목입니다."),
    companyNumber: Yup.string()
      .min(9, "사업자번호는 9자리입니다.")
      .required("사업자번호는 필수 입력 항목입니다."),
    // companyName: Yup.string().required('회사명는 필수 입력 항목입니다.'),
    // tel: Yup.string().matches(phoneRegExp, { message: '유효한 숫자를 입력하십시오.' }),
    // mobile: Yup.string()
    //   .required('휴대전화번호는 필수 입력 항목입니다.')
    //   .matches(mobileRegExp, { message: '유효한 숫자를 입력하십시오.' }),
    // addr: Yup.string().required('주소는 필수 입력 항목입니다.'),
    // id: Yup.string().min(4, '아이디는 4글자 이상 입력해주세요.').required('아이디는 필수 입력 항목입니다.'),
    // pwd: Yup.string().min(4, '비밀번호는 4글자 이상 입력해주세요.').required('비밀번호는 필수 입력 항목입니다.'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // const { wmsID,marketInfos,addr,mobile,tel,companyName,managerName, id, pwd } = values;

    // console.log(wmsID,marketInfos,addr,mobile,tel,companyName,managerName, id, pwd);
    console.log("values", values);
  };

  return (
    <GlobalLayout>
      <Formik
        initialValues={formInitialValues}
        validationSchema={postSignUpSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">회원가입 🚀</h1>
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="wmsID"
                  placeholder="wmsID"
                />
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="companyName"
                  placeholder="companyName"
                />
                {/* {formik.touched.companyName && formik.errors.companyName ? (
              <div>{formik.errors.companyName}</div>
            ) : null} */}

                {/* <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastName"
              placeholder="Last Name"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password (5 characters and above)"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="Vpassword"
              placeholder="Confirm Password"
              {...formik.getFieldProps("Vpassword")}
            />
            {formik.touched.Vpassword && formik.errors.Vpassword ? (
              <div>{formik.errors.Vpassword}</div>
            ) : null} */}

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                >
                  가입하기
                </button>

                <div className="text-center text-sm text-grey-dark mt-4">
                  By signing up, you agree to the
                  <a
                    className="no-underline border-b border-grey-dark text-grey-dark"
                    href="#"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    className="no-underline border-b border-grey-dark text-grey-dark"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>

              <div className="text-grey-dark mt-6">
                이미 회원이신가요?
                <a
                  className="no-underline border-b border-blue text-blue"
                  href="../login/"
                >
                  로그인하러 가기
                </a>
                .
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </GlobalLayout>
  );
}

export default SignUp;
