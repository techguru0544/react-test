import { forwardRef } from 'react'
import { Formik,Form } from "formik";
import DatePicker from "react-datepicker";
import { Col, Container, FormGroup, Row, } from "reactstrap";
import * as Yup from "yup";
function App() {
  const DateInput = forwardRef(({ value, onClick, placeholderText }, ref) => (
    <button onClick={onClick} ref={ref} className='datepicker-input'>
      {!value ? placeholderText : value}
    </button>
  ));  
  return (
    <div className="test-main">
      <div className="test-inner">
        <Container>
          <Formik
            initialValues={{
              name: "",
              dob: "",
              countryOfResidence: "",
              school: "",
              areaOfStudy: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              dob: Yup.date()
                .max(new Date(), "Are you a time traveler?")
                .required("Required"),
              countryOfResidence: Yup.string().required("Required"),
              school: Yup.string().required("Required"),
              areaOfStudy: Yup.string().required("Required")
            })}
            onSubmit={(values, { resetForm }) => {
              values.dob = values.dob.toLocaleDateString("en-US");
              alert(JSON.stringify(values, null, 2))
              resetForm();
            }}
          >
            {({ handleSubmit, handleChange, handleBlur, values, errors,
              touched, setFieldValue}) => (
              <Form>
                <Row>
                  <Col md={12}>
                    <FormGroup className="input-group">
                      <label htmlFor="name">Your full given name:</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {touched.name && errors.name && (
                        <div className="error">{errors.name}</div>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="input-group">
                      <label htmlFor="dob" className="date-input">
                        Date of Birth
                      </label>
                      <DatePicker
                        selected={values.dob}
                        onChange={(v) => {
                          setFieldValue('dob', v)
                        }}
                        onBlur={handleBlur}
                        customInput={<DateInput placeholderText="" />}
                        filterDate={(date) => {
                          return new Date() > date;
                        }}
                        dateFormat="MMMM d,yyyy"
                      />
                      {touched.dob && errors.dob && (
                        <div className="error">{errors.dob}</div>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="input-group">
                      <label htmlFor="countryOfResidence">
                        Country of residence or citizenship:
                      </label>
                      <input
                        id="countryOfResidence"
                        name="countryOfResidence"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.countryOfResidence}
                      />
                      {touched.countryOfResidence &&
                        errors.countryOfResidence && (
                          <div className="error">
                            {errors.countryOfResidence}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup className="input-group">
                      <label htmlFor="school">
                        What school do you plan to attend?
                      </label>
                      <input
                        id="school"
                        name="school"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.school}
                      />
                      {touched.school && errors.school && (
                        <div className="error">{errors.school}</div>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup className="input-group">
                      <label htmlFor="areaOfStudy">
                        Please take a moment to describe your intended area of
                        study:
                      </label>
                      <textarea
                        placeholder="Enter details here"
                        id="areaOfStudy"
                        name="areaOfStudy"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.areaOfStudy}
                      />
                      {touched.areaOfStudy && errors.areaOfStudy && (
                        <div className="error">{errors.areaOfStudy}</div>
                      )}
                    </FormGroup>
                  </Col>
                  <Col xs={12}>
                    <FormGroup>   
                      <input type="submit" className="submit-btn" />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>)}
          </Formik>
        </Container>
      </div>
    </div >
  );
}

export default App;
