import { redirect } from 'next/navigation';

export default function MedicalScanRedirect() {
  redirect('/orchestrator-agent?tab=scan');
}
