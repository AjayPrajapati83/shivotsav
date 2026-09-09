import { team } from '../../data/team';
import SectionHeading from '../ui/SectionHeading';
import DepartmentRow from './DepartmentRow';
import useScrollReveal from '../../hooks/useScrollReveal';

export function Team() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="team"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--color-navy-900) 0%, var(--color-navy-800) 50%, var(--color-navy-900) 100%)',
      }}
    >
      <div className="w-full flex flex-col items-center justify-center relative z-10 px-4 sm:px-6">
        <div className="w-full max-w-7xl flex flex-col items-center">
          {/* Section Header */}
          <div data-reveal className="w-full mb-16">
            <SectionHeading subtitle="The warriors behind the legends">
              Council of the Gods
            </SectionHeading>
          </div>

          {/* Department Categories */}
          <div className="space-y-64 relative z-10 w-full">
            {team.map((dept) => (
              <div key={dept.department} data-reveal>
                <DepartmentRow department={dept} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
