import SpaceCreateForm from '@components/Space/SpaceCreateForm';
import { CreateSpaceData } from '@customTypes/space';

export default function SpaceCreate() {
  const handleSubmit = (spaceData: CreateSpaceData) => {
    console.log(spaceData);
  };

  return <SpaceCreateForm onSubmit={handleSubmit} />;
}
