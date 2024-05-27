import { Tone } from '@/types/types';
import { FC } from 'react';

interface Props {
  tone: Tone;
  onChange: (tone: Tone) => void;
}

export const ToneSelect: FC<Props> = ({ tone = Tone.Professional, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Tone);
  };

  return (
    <select
      className="h-[40px] w-[200px] rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
      value={tone}
      onChange={handleChange}
    >
      <option value={Tone.Professional}>Professional</option>
      <option value={Tone.Casual}>Casual</option>
      <option value={Tone.Academic}>Academic</option>
      <option value={Tone.Formal}>Formal</option>
    </select>
  );
};
