import { redirect } from 'next/navigation';

export default function RedirectOrchestrator() {
  redirect('/orchestrator-agent');
}
