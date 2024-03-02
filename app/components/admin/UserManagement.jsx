import React from 'react'
import CreateUserForm from './CreateUserForm'
import Users from './Users';

const UserManagement = () => {
  return (
    <div className="max-w-4xl text-black mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-8"></h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create New User</h2>
        <CreateUserForm />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <Users />
      </div>
    </div>
  )
}

export default UserManagement