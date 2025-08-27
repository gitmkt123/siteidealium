-- Criar tabela para capturar leads da landing page
CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  source TEXT DEFAULT 'landing_page',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Habilitar RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Permitir inserção para usuários anônimos (para o formulário da landing page)
CREATE POLICY "Allow anonymous insert" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Permitir leitura para usuários autenticados
CREATE POLICY "Allow authenticated read" ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Permitir todas as operações para usuários autenticados
CREATE POLICY "Allow authenticated all" ON leads
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Conceder permissões
GRANT INSERT ON leads TO anon;
GRANT ALL PRIVILEGES ON leads TO authenticated;

-- Criar índices para performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);