import { Button, Form, Input, FormInstance } from 'antd';

export type RegisterFormValues = {
  username: string;
  password: string;
};

type RegisterFormProps = {
  className?: string;
  isLoading?: boolean;
  form?: FormInstance<RegisterFormValues>;
  onFinish?: (values: RegisterFormValues) => void;
};

function RegisterForm({ className, isLoading, form, onFinish }: RegisterFormProps) {
  return (
    <Form
      className={className}
      form={form}
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      autoComplete="off"
      onFinish={onFinish}
    >
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input disabled={isLoading} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password disabled={isLoading} />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              // eslint-disable-next-line compat/compat -- нужно будет узнать как поправить
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password disabled={isLoading} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 7, span: 10 }}>
        <Button type="primary" htmlType="submit" block loading={isLoading}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegisterForm;
