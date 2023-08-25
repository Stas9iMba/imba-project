import { Form, Input, Button, Typography, FormInstance } from 'antd';

export type AuthFormValues = {
  username: string;
  password: string;
};

type AuthFormProps = {
  className?: string;
  isLoading?: boolean;
  form?: FormInstance<AuthFormValues>;
  onFinish?: (values: AuthFormValues) => void;
};

function AuthForm({ className, isLoading, form, onFinish }: AuthFormProps) {
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
      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password disabled={isLoading} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 7, span: 10 }}>
        <Button type="primary" htmlType="submit" block loading={isLoading}>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AuthForm;
