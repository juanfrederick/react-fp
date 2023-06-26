import { Button, Input, Select } from "@chakra-ui/react";

const TextInput = ({ title, type, id, testId, value, onChange }) => {
  return (
    <div className="flex flex-col mt-2 flex-1">
      <label htmlFor={id} className="text-sm font-bold">
        {title}
      </label>
      <Input
        type={type}
        bg="white"
        border="1px solid black"
        height="2rem"
        marginTop="0.5rem"
        id={id}
        data-testid={testId}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

const SelectInput = ({ title, id, children, testId, value, onChange }) => {
  return (
    <div className="mt-2 flex flex-col flex-1">
      <label htmlFor={id} className="text-sm font-bold">
        {title}
      </label>
      <Select
        name={id}
        id={id}
        bg="white"
        border="1px solid black"
        height="2rem"
        marginTop="0.5rem"
        data-testid={testId}
        value={value}
        onChange={onChange}
      >
        {children}
      </Select>
    </div>
  );
};

const Form = ({ onsubmit, add, data, setData }) => {
  return (
    <form action="submit" className="flex-1" onSubmit={onsubmit}>
      <TextInput
        title="Fullname"
        type="input"
        id="fullname"
        testId="name"
        value={data.fullname}
        onChange={(e) => {
          setData({ ...data, fullname: e.target.value });
        }}
      />
      {add ? (
        <TextInput
          title="Profile Picture"
          type="input"
          id="picture"
          testId="profilePicture"
          value={data.profilePicture}
          onChange={(e) => {
            setData({ ...data, profilePicture: e.target.value });
          }}
        />
      ) : null}
      <TextInput
        title="Address"
        type="input"
        id="address"
        testId="address"
        value={data.address}
        onChange={(e) => {
          setData({ ...data, address: e.target.value });
        }}
      />
      <TextInput
        title="Phone Number"
        type="input"
        id="number"
        testId="phoneNumber"
        value={data.phoneNumber}
        onChange={(e) => {
          setData({ ...data, phoneNumber: e.target.value });
        }}
      />
      <div className="flex gap-2">
        <TextInput
          title="Birth Date"
          type="date"
          id="date"
          testId="date"
          value={data.birthDate}
          onChange={(e) => {
            setData({ ...data, birthDate: e.target.value });
          }}
        />
        <SelectInput
          title="Gender"
          id="gender"
          testId="gender"
          value={data.gender}
          onChange={(e) => {
            setData({ ...data, gender: e.target.value });
          }}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </SelectInput>
      </div>

      <SelectInput
        title="Program Study"
        id="input-prody"
        testId="prody"
        value={data.programStudy}
        onChange={(e) => {
          setData({ ...data, programStudy: e.target.value });
        }}
      >
        <option value="Ekonomi">Ekonomi</option>
        <option value="Manajemen">Manajemen</option>
        <option value="Akuntansi">Akuntansi</option>
        <option value="Administrasi Publik">Administrasi Publik</option>
        <option value="Administrasi Bisnis">Administrasi Bisnis</option>
        <option value="Hubungan Internasional">Hubungan Internasional</option>
        <option value="Teknik Sipil">Teknik Sipil</option>
        <option value="Arsitektur">Arsitektur</option>
        <option value="Matematika">Matematika</option>
        <option value="Fisika">Fisika</option>
        <option value="Informatika">Informatika</option>
      </SelectInput>

      {add ? (
        <Button
          type="submit"
          data-testid="add-btn"
          colorScheme="cyan"
          marginTop="1rem"
        >
          Add Student
        </Button>
      ) : (
        <Button
          type="submit"
          data-testid="edit-btn"
          colorScheme="cyan"
          marginTop="1rem"
        >
          Edit Student
        </Button>
      )}
    </form>
  );
};

export default Form;
